input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    music.playMelody("G E B E C5 D B F ", 130)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("F A E B A B C5 A ", 59)
})
basic.showIcon(IconNames.Umbrella)
for (let index = 0; index < 10; index++) {
    music.playMelody("G F G F G F G F ", 94)
}
