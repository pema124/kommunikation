input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Up), function () {
    tasteBgedrueckt = 0
    basic.setLedColors(basic.rgb(tasteAgedrueckt * 255, 0, 0), 0x000000, basic.rgb(tasteBgedrueckt * 255, 0, 0))
    radio.sendNumber(10)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        tasteAempfangen = 1
    } else if (receivedNumber == 0) {
        tasteAempfangen = 0
    } else if (receivedNumber == 11) {
        tasteBempfangen = 1
    } else if (receivedNumber == 10) {
        tasteBempfangen = 0
    } else {
        basic.setLedColors(0x000000, 0x007fff, 0x000000)
    }
    basic.setLedColors(basic.rgb(0, tasteAempfangen * 255, 0), 0x000000, basic.rgb(0, tasteBempfangen * 255, 0))
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Down), function () {
    tasteAgedrueckt = 1
    basic.setLedColors(basic.rgb(tasteAgedrueckt * 255, 0, 0), 0x000000, basic.rgb(tasteBgedrueckt * 255, 0, 0))
    radio.sendNumber(1)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Down), function () {
    tasteBgedrueckt = 1
    basic.setLedColors(basic.rgb(tasteAgedrueckt * 255, 0, 0), 0x000000, basic.rgb(tasteBgedrueckt * 255, 0, 0))
    radio.sendNumber(11)
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Up), function () {
    tasteAgedrueckt = 0
    basic.setLedColors(basic.rgb(tasteAgedrueckt * 255, 0, 0), 0x000000, basic.rgb(tasteBgedrueckt * 255, 0, 0))
    radio.sendNumber(0)
})
let tasteBempfangen = 0
let tasteBgedrueckt = 0
let tasteAempfangen = 0
let tasteAgedrueckt = 0
radio.setTransmitPower(7)
radio.setGroup(1)
tasteAgedrueckt = 0
tasteAempfangen = 0
tasteBgedrueckt = 0
tasteBempfangen = 0
