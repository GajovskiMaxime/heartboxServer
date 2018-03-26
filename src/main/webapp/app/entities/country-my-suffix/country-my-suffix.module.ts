import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeartboxServerSharedModule } from '../../shared';
import {
    CountryMySuffixService,
    CountryMySuffixPopupService,
    CountryMySuffixComponent,
    CountryMySuffixDetailComponent,
    CountryMySuffixDialogComponent,
    CountryMySuffixPopupComponent,
    CountryMySuffixDeletePopupComponent,
    CountryMySuffixDeleteDialogComponent,
    countryRoute,
    countryPopupRoute,
} from './';

const ENTITY_STATES = [
    ...countryRoute,
    ...countryPopupRoute,
];

@NgModule({
    imports: [
        HeartboxServerSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CountryMySuffixComponent,
        CountryMySuffixDetailComponent,
        CountryMySuffixDialogComponent,
        CountryMySuffixDeleteDialogComponent,
        CountryMySuffixPopupComponent,
        CountryMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        CountryMySuffixComponent,
        CountryMySuffixDialogComponent,
        CountryMySuffixPopupComponent,
        CountryMySuffixDeleteDialogComponent,
        CountryMySuffixDeletePopupComponent,
    ],
    providers: [
        CountryMySuffixService,
        CountryMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeartboxServerCountryMySuffixModule {}
