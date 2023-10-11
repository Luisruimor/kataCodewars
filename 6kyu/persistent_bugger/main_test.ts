import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { persistence } from "./main.ts";

Deno.test(function kataTest() {
  assertEquals(persistence(39), 3);
});

Deno.test(function kataTest() {
  assertEquals(persistence(4), 0);
});

Deno.test(function kataTest() {
  assertEquals(persistence(25), 2);
});

Deno.test(function kataTest() {
  assertEquals(persistence(999), 4);
});