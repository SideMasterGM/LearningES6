import {alertMessage, greeting} from "./modules/alertMessage";
import ClassPerson from "./modules/classPerson";

alertMessage("Hello World!");

greeting("I'm saying hello!");

const FirstRecord = new ClassPerson("Jerson Martínez", 22);
FirstRecord.showInfo();