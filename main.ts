let Hungryness = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        Hungryness = Hungryness + 1
        basic.showNumber(Hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        Hungryness = 0
        basic.showNumber(Hungryness)
    }
    
})
