input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . # # #
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . # # # .
            . . # # #
            . . # # #
            . . . . .
            `)
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # # .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # .
            . . . # #
            . . . # .
            `)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # # #
            . . # . .
            `)
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 G E A A C5 A G ", 500)
    music.playMelody("B C5 B G D G F E ", 500)
    music.playMelody("B E F C5 E A E D ", 500)
    music.playMelody("D B F - F E F A ", 500)
    music.playMelody("A C5 A B A G F G ", 500)
    music.playMelody("C5 E B F F - E F ", 500)
})
music.playMelody("B A F A G F A C5 ", 100)
basic.showString("salut Carlos")
