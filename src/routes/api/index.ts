
import { sendRedirect, setCookie } from "vinxi/http";
import type { APIEvent } from "@solidjs/start/server";

export function GET(event: APIEvent) {
  const url = new URL("https://github.com/Jhinger")

	setCookie(event.nativeEvent, "github_oauth_state", "abc", {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

	return sendRedirect(event.nativeEvent, url.toString());
}