import { test, expect, request, Response } from "@playwright/test";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { METHODS } from "node:http";
import { describe } from "node:test";

describe("test final project supabase api", async () => {
  test("/api/table", async () => {
    const response = await fetch("http://localhost:3000/api/table", {
      method: "GET",
    });
    console.log(response.json());
    expect(response.status).toBe(200);
  });
  test("/api/borrowRecord/:book_id", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v2/borrowRecord/book_id=40",
      {
        method: "GET",
      }
    );
    expect(response.statusText).toBe("OK");
    expect(response.status).toBe(200);
  });
  test("/api/:column/:searchdata", async () => {
    const response = await fetch("http://localhost:3000/api/book_id/2654000");

    expect(response.status).toBe(200);
    console.log(response.body);
  });
});
