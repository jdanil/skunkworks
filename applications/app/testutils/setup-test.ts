import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

// https://airbnb.io/enzyme/docs/installation/
// eslint-disable-next-line functional/no-expression-statement
configure({ adapter: new Adapter() });
