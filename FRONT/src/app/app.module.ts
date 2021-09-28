import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes da aplicação
import { AppComponent } from "./app.component";
import { CadastrarFilmeComponent } from "./componentes/views/filme/cadastrar-filme/cadastrar-filme.component";
import { ListarFilmeComponent } from "./componentes/views/filme/listar-filme/listar-filme.component";

@NgModule({
    declarations: [
        AppComponent,
        ListarFilmeComponent,
        CadastrarFilmeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}