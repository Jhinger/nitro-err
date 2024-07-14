
import { sendRedirect, setCookie } from "vinxi/http";
import type { APIEvent } from "@solidjs/start/server";

export function GET(event: APIEvent) {
  const url = new URL("https://github.com/Jhinger")

	return sendRedirect(event.nativeEvent, url.toString());
}