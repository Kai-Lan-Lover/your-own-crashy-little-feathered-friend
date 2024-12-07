input.onButtonPressed(Button.A, function () {
    feathered_friend.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    feathered_friend.change(LedSpriteProperty.Y, 1)
})
let ticks = 0
let feathered_friend: game.LedSprite = null
let index = 0
let obstacle: number[] = []
feathered_friend = game.createSprite(0, 2)
feathered_friend.set(LedSpriteProperty.Blink, 0)
basic.forever(function () {
    let obstacles: game.LedSprite[] = []
    for (let index2 = 0; index2 < 1; index2++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
    }
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == feathered_friend.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == feathered_friend.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
