

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService  } from '../api-service.service'; 


@Component({
  selector: 'app-new-offer1',
  templateUrl: './new-offer1.component.html',
  styleUrls: ['./new-offer1.component.css']
})
export class NewOffer1Component {
  myForm: FormGroup;




  constructor(private fb: FormBuilder, private apiService: ApiServiceService) {
    this.myForm = this.fb.group({

      title: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      price: ['', Validators.required],

    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {

      this.apiService.sendData(this.myForm.value).subscribe(
        response => {
          console.log('Dane zostały wysłane pomyślnie:', response);

        },
        error => {
          console.error('Błąd podczas wysyłania danych:', error);

        }
      );
    } else {
      console.log('Formularz jest niepoprawny. Sprawdź błędy walidacji.');
    }
  }
}