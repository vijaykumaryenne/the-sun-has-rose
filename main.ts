control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
})
