import { DateTime } from "luxon";
import { parse, toArraySorted } from "../src";
import { mapUrls } from "../src/utilities/urls";

describe("urls", () => {
  test("url generation", () => {
    const mw =
      parse(`2025-05-02 10:35: New $30 sponsorship from [@code77](https://github.com/code77)! Added to the [sponsorline](https://timeline.markwhen.com/markwhen/sponsorline).

Thank you!
`);
    const asArray = toArraySorted(mw.events, DateTime.now().plus({ years: 1 }));
    const urls = mapUrls(asArray);

    expect(urls.length).toBe(1);
    expect(urls[0].url).toBe('New-30-sponsorship-from')
  });
});
