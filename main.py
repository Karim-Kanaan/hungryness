Hungryness = 0

def on_forever():
    global Hungryness
    if input.button_is_pressed(Button.A):
        Hungryness = Hungryness + 1
        basic.show_number(Hungryness)
    elif input.button_is_pressed(Button.B):
        Hungryness = 0
        basic.show_number(Hungryness)
basic.forever(on_forever)
