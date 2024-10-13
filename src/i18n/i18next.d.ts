import { resources, defaultNS } from "./config";

import general_tr from "./tr/general.json";
import content_tr from "./tr/content.json";
import menu_tr from "./tr/menu.json";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: {
			general: typeof general_tr;
			content: typeof content_tr;
			menu: typeof menu_tr;
		};
	}
}
