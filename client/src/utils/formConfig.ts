import { KeyboardEvent } from "react";

export function onKeyDown(event: KeyboardEvent<HTMLFormElement>): void {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}
