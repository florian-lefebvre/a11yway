import "./style.css";
import "a11yway";
import { setupCounter } from "./counter.ts";

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
