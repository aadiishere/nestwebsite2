import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Exinterpolation } from "./exinterpolation/exinterpolation";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Exinterpolation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Firstproject');
}
