import { useEffect, useState } from "react";

import { SVGIcon } from "@/components/SVGIcon";
import BatteryCharging from "pixelarticons/svg/battery-charging.svg?react";
import BatteryFull from "pixelarticons/svg/battery-full.svg?react";
import BatteryHalf from "pixelarticons/svg/battery-2.svg?react";
import BatteryQuarter from "pixelarticons/svg/battery-1.svg?react";

type BatteryManager = {
	charging: boolean;
	chargingTime: number;
	dischargingTime: number;
	level: number;
	onchargingchange: (() => void) | null;
	onchargingtimechange: (() => void) | null;
	ondischargingtimechange: (() => void) | null;
	onlevelchange: (() => void) | null;
};

type Battery = { charging: boolean; percent: number };

const getBatteryIcon = (charge: number) => {
	if (charge >= 75) {
		return BatteryFull;
	} else if (charge >= 25) {
		return BatteryHalf;
	} else {
		return BatteryQuarter;
	}
};

export function BatteryIndicator() {
	const [battery, setBattery] = useState<Battery | null>(null);

	useEffect(() => {
		// @ts-expect-error Not fully supported API
		if (navigator.getBattery) {
			// @ts-expect-error Not fully supported API
			navigator.getBattery().then((bat: BatteryManager) => {
				setBattery({
					charging: bat.charging,
					percent: bat.level * 100
				});

				bat.onlevelchange = () => {
					setBattery({
						charging: bat.charging,
						percent: bat.level * 100
					});
				};
				bat.onchargingchange = () => {
					setBattery({
						charging: bat.charging,
						percent: bat.level * 100
					});
				};
			});
		}
	}, []);

	if (!battery) return null;

	return <SVGIcon Icon={battery.charging ? BatteryCharging : getBatteryIcon(battery.percent)} />;
}
