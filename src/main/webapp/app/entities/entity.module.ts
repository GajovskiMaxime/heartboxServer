import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeartboxServerRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { HeartboxServerCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { HeartboxServerLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HeartboxServerDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HeartboxServerTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { HeartboxServerEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HeartboxServerJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { HeartboxServerJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HeartboxServerRegionMySuffixModule,
        HeartboxServerCountryMySuffixModule,
        HeartboxServerLocationMySuffixModule,
        HeartboxServerDepartmentMySuffixModule,
        HeartboxServerTaskMySuffixModule,
        HeartboxServerEmployeeMySuffixModule,
        HeartboxServerJobMySuffixModule,
        HeartboxServerJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeartboxServerEntityModule {}
