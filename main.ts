input.onButtonPressed(Button.A, function () {
    Random_Number = randint(1, 3)
    if (Random_Number == 3) {
        basic.showString("water")
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (Random_Number == 2) {
        basic.showString("subscribe")
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
})
let Random_Number = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
