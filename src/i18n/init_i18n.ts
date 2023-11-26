import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { i18n_options } from "./config";

i18next.use(initReactI18next).init(i18n_options);
