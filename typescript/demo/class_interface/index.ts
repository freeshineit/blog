interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff: () => string;
}

interface LightAlarm extends Alarm {
    lightAlarm: () => number;
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
     alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm, Light{
    alert() {
        console.log('Car alert');
    }

    lightOn () {

    }

    lightOff () {
        return 'lightOff'
    }
}