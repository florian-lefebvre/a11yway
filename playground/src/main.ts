import "a11yway";
import "a11yway/dist/css/theme-dark.css";
import "./style.css";
import { setupCounter } from "./counter.ts";

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
