import { configureStore } from "./store";
import { CounterController } from "./controllers";

// start application
(() => {
	const store = configureStore();
	const countController = new CounterController(store, "#counter");

	countController.init();
})();
