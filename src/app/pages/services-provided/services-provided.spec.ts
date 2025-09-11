import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProvided } from './services-provided';

describe('ServicesProvided', () => {
	let component: ServicesProvided;
	let fixture: ComponentFixture<ServicesProvided>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ServicesProvided]
		})
		.compileComponents();

		fixture = TestBed.createComponent(ServicesProvided);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
