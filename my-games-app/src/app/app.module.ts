import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SplatoonLoreComponent } from './splatoon-lore/splatoon-lore.component';
import { SplatoonLoreListComponent } from './splatoon-lore/splatoon-lore-list/splatoon-lore-list.component';
import { SplatoonLoreDetailsComponent } from './splatoon-lore/splatoon-lore-details/splatoon-lore-details.component';
import { LoreItemsComponent } from './splatoon-lore/splatoon-lore-list/lore-items/lore-items.component';
import { SplatoonDetailsComponent } from './splatoon-details/splatoon-details.component';
import { SplatoonCharactersComponent } from './splatoon-details/splatoon-characters/splatoon-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplatoonLoreComponent,
    SplatoonLoreListComponent,
    SplatoonLoreDetailsComponent,
    LoreItemsComponent,
    SplatoonDetailsComponent,
    SplatoonCharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
