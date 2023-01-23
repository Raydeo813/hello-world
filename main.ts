input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("B E B E C5 D B F ", 250)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        `)
    music.playMelody("E D G F B A C5 B ", 350)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hi There!")
    music.playMelody("F A G C5 A B C5 G ", 250)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("STOP THAT!")
    music.playMelody("C5 C C5 C C5 C C5 C ", 150)
})
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # . . . #
    . # # # .
    `)
for (let index = 0; index < 10; index++) {
    music.playMelody("C5 B G C5 B E C5 B ", 250)
}
