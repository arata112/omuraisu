let 時間 = 0
input.onButtonPressed(Button.A, function () {
    時間 += 1
    basic.showNumber(時間)
})
input.onGesture(Gesture.LogoDown, function () {
    時間 += -1
    basic.showNumber(時間)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(時間 * 1000)
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
})
input.onButtonPressed(Button.B, function () {
    時間 += 10
    basic.showNumber(時間)
})
