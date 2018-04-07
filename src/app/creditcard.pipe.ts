import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {
	transform(creditCard: number, args?: any): any {
		const card = creditCard % 10000;
		const credit = creditCard.toString().substring(0, creditCard.toString().length - 4);
		return credit.replace(/./g, '*') + '' + card;
	}
}
