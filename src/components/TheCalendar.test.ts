import { describe, expect, test } from "vitest";
import TheCalendar from "./TheCalendar.vue";
import { mount } from "@vue/test-utils";

describe("TheCalendar", () => {
  test("should displays expected heading text", () => {
    const wrapper = mount(TheCalendar, {
      props: {
        dayCountToDisplay: 7,
      },
    });
    const headingText = wrapper.find("h1").text();

    expect(headingText).toContain("TODO: Calendar");
  });
});
