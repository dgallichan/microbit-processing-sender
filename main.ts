basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    serial.writeString("" + control.deviceName() + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)) + "\n")
    led.toggle(2, 2)
    basic.pause(40)
})
