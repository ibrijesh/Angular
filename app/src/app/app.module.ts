import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBiddingComponent } from './style-bidding/style-bidding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBiddingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    ComponentInteractionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
