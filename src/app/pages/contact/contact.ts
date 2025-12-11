import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit, AfterViewInit {
  // form model matching CF7 field names
  text258: string = '';
  email690: string = '';
  tel986: string = '';
  textarea169: string = '';

  loading = false;
  successMessage = '';
  errorMessage = '';

  // debug state to verify this component instance receives events
  debugState = '';

  private endpoint = 'https://advizent.com/wp-json/contact-form-7/v1/contact-forms/741/feedback';

  isBrowser = false;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log('[Contact top] constructor (isBrowser=' + this.isBrowser + ')');
  }

  ngOnInit(): void {
    console.log('[Contact top] ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('[Contact top] ngAfterViewInit (isBrowser=' + this.isBrowser + ')');
    if (!this.isBrowser) {
      return;
    }
    const btn = document.getElementById('contact-submit-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        console.log('[Contact top] native button click detected via addEventListener');
      });
    } else {
      console.warn('[Contact top] submit button not found in DOM');
    }
  }

  // called when native form 'submit' fires (fallback)
  onNativeSubmit(ev: Event) {
    ev.preventDefault(); // prevent page reload and let Angular handle
    console.log('[Contact] native submit event', ev);
    this.debugState = 'native submit at ' + new Date().toISOString();
  }

  // Accept NgForm (template passes #contactForm="ngForm")
  submit(form: NgForm) {
    console.log('[Contact] submit() called', { formValue: form?.value, valid: form?.valid });
    this.debugState = 'submit called at ' + new Date().toISOString();
    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    const fd = new FormData();
    fd.append('text-258', this.text258 || '');
    fd.append('email-690', this.email690 || '');
    fd.append('tel-986', this.tel986 || '');
    fd.append('textarea-169', this.textarea169 || '');

    // debug: log the outgoing body keys for inspection
    for (const pair of (fd as any).entries()) {
      console.log('[Contact] formData entry', pair);
    }

    this.http.post(this.endpoint, fd, { observe: 'response' }).subscribe({
      next: (resp) => {
        this.loading = false;
        console.log('[Contact] POST response', resp);
        const body: any = (resp && resp.body) ? resp.body : resp;
        this.successMessage = (body && (body.message || body.status)) ? (body.message || body.status) : 'Message sent';
        this.text258 = this.email690 = this.tel986 = this.textarea169 = '';
        if (form && typeof (form.resetForm) === 'function') form.resetForm();
      },
      error: (err) => {
        this.loading = false;
        console.error('[Contact] POST error', err);
        if (err && err.status === 0) {
          this.errorMessage = 'Network error or CORS blocked the request (status 0). Check browser console / network tab.';
        } else {
          this.errorMessage = (err && err.error && err.error.message) ? err.error.message : 'Failed to send message';
        }
      }
    });
  }
}
