import React from "react";

export const CurrentTime = () => (
	<span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
);
