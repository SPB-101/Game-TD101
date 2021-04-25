import { configure } from "enzyme";
import { JSDOM } from "jsdom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

beforeEach(() => {
  beforeEach(() => {
    jest.mock("react-i18next", () => ({
      useTranslation: () => ({ t: (key: string) => key }),
    }));
  });
});

const dom = new JSDOM(
  "<!DOCTYPE html><html><head></head><body></body></html>",
  {
    contentType: "text/html",
  }
);

global.Audio = dom.window.Audio;
