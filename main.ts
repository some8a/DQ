namespace SpriteKind {
    export const kagu = SpriteKind.create()
    export const king = SpriteKind.create()
    export const shop = SpriteKind.create()
    export const kyokai = SpriteKind.create()
    export const entrance = SpriteKind.create()
    export const murabito = SpriteKind.create()
    export const city = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
function getSetting () {
    level = blockSettings.readNumber("level")
    maxhp = blockSettings.readNumber("maxhp")
    hp = blockSettings.readNumber("hp")
    maxmp = blockSettings.readNumber("maxmp")
    mp = blockSettings.readNumber("mp")
}
function putEnemy () {
    inSentou = true
    for (let index = 0; index < 10; index++) {
        enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemy1, sprites.castle.tileGrass1)
        enemy1.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(enemy1)) {
            enemy1.destroy()
        }
    }
    for (let index = 0; index < 10; index++) {
        enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemy1, sprites.builtin.forestTiles0)
        enemy1.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(enemy1)) {
            enemy1.destroy()
        }
    }
    for (let index = 0; index < 10; index++) {
        enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemy1, sprites.castle.tilePath5)
        enemy1.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(enemy1)) {
            enemy1.destroy()
        }
    }
    inSentou = false
}
function spritesetting () {
    entrance = sprites.create(img`
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        `, SpriteKind.entrance)
    entrance.setPosition(8, 152)
    bed = sprites.create(img`
        ...bbccccccbb...
        ..bdddddddd1db..
        .bddbbbbbbbbddb.
        .cdb11111111bdc.
        .cbcdbbbbbbdcbc.
        .fbcc111111ccbf.
        .fbcd111111dcbf.
        f66cdd1111ddc66f
        f66ccbbbbbbcc66f
        fcbb33333333bbcf
        fbb3333333333bbf
        fbb3d111111d3bbf
        fbd1111111111dbf
        fdd1111111111ddf
        fdd1111111111ddf
        fdd1111111111ddf
        fdd1111111111ddf
        fdd11dbbbbd11ddf
        cdbbddddddddbbdf
        cbddddddddddddbc
        cddddddddddddddc
        .cccccccccccccc.
        .fbbfbbbbbbfbbf.
        ..ff........ff..
        `, SpriteKind.kagu)
    bed.setPosition(72, 200)
    kyokai1 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.kyokai)
    kyokai1.setPosition(184, 200)
    king1 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.king)
    king1.setPosition(184, 56)
    murabito = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . f f e e e e f b f . . . . . 
        . f f e e e e f b b b f . . . . 
        . f e e e f f e e e e f . . . c 
        . f f f f e e b b b b e f . c d 
        . f e b b b f f f f e b f c d d 
        f f f f f f f e e e f f c d d c 
        f f e 4 4 e b f 4 4 e c d d c . 
        f e e 4 d 4 1 f d d e c d c . . 
        . f e e e 4 d d d e d c c c . . 
        . . f f e e 4 4 e c d d e . . . 
        . . . f b b b b c c e e . . . . 
        . . . f b b b b e b f . . . . . 
        . . . f c c c c 5 5 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . f f f . . . . . . . . 
        `, SpriteKind.murabito)
    murabito.setPosition(152, 68)
    murabito = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . . f b f e e e e f f . . 
        . . . . f b b b f e e e e f f . 
        c . . . f e e e e f f e e e f . 
        d c . f e b b b b e e f f f f . 
        d d c f b e f f f f b b b e f . 
        c d d c f f e e e f f f f f f f 
        . c d d c e 4 4 f b e 4 4 e f f 
        . . c d c e d d f 1 4 d 4 e e f 
        . . c c c d e d d d 4 e e e f . 
        . . . e d d c e 4 4 e e f f . . 
        . . . . e e c c b b b b f . . . 
        . . . . . f b e b b b b f . . . 
        . . . . . f 5 5 c c c c f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . f f f . . . . . 
        `, SpriteKind.murabito)
    murabito.setPosition(216, 68)
    murabito = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.murabito)
    murabito.setPosition(56, 104)
    doguya = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.shop)
    doguya.setPosition(56, 136)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.entrance, function (sprite, otherSprite) {
    clearCity()
    mapSetting()
    tiles.setTilemap(tilemap`レベル2`)
    putEnemy()
    mySprite.setPosition(72, 184)
})
function sentou () {
    mySprite.setFlag(SpriteFlag.Invisible, true)
    controller.moveSprite(mySprite, 0, 0)
    clearMap()
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`レベル3`)
    while (false) {
    	
    }
    pause(2000)
    mapSetting()
    mySprite.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(mySprite, 50, 50)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
function clearCity () {
    king1.destroy()
    kyokai1.destroy()
    doguya.destroy()
    for (let 値 of sprites.allOfKind(SpriteKind.murabito)) {
        値.destroy()
    }
    bed.destroy()
    entrance.destroy()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
function mapSetting () {
    scene.setBackgroundColor(7)
    tiles.setTilemap(tilemap`レベル2`)
    city1 = sprites.create(assets.tile`myTile0`, SpriteKind.city)
    city1.setPosition(72, 168)
    city1 = sprites.create(assets.tile`myTile0`, SpriteKind.city)
    city1.setPosition(40, 88)
    city1 = sprites.create(img`
        f f a a f a a 8 f a a f f d c f 
        f d a c 8 a c 8 d a c 8 d b c b 
        d c c c a c c c a c c a d c c c 
        c c c c c c c c c c c c c c c f 
        f a a c f f d f f d c c f 8 c f 
        f d a c f f d f f d c c f a c f 
        f d a a d d c d d a c c f a c f 
        f d a c c c a c c a c c f a c f 
        f d a c f f d f f d c c f a c f 
        f d a c f f d f f d c c f a c f 
        f d a d d d b d d d d b f a c f 
        f 8 d b c c b b b b b d 8 8 c f 
        8 c c a d c b a b d b c d b 8 8 
        c a c a a a c a a d d b c a a a 
        c a b c 8 8 a c a a 8 8 c c a a 
        a a b b c 8 8 b c c a 8 a 8 c c 
        `, SpriteKind.city)
    city1.setPosition(232, 8)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    level += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
function saveSetting () {
    blockSettings.writeNumber("level", level)
    blockSettings.writeNumber("maxhp", maxhp)
    blockSettings.writeNumber("hp", hp)
    blockSettings.writeNumber("maxmp", maxmp)
    blockSettings.writeNumber("mp", mp)
}
sprites.onOverlap(SpriteKind.shop, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.up.isPressed()) {
        game.showLongText("ここは道具屋だ。\\n何を買うかい？", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.king, function (sprite, otherSprite) {
    if (controller.up.isPressed()) {
        game.showLongText("よく来た。勇者", DialogLayout.Bottom)
    }
})
function clearMap () {
    for (let 値 of sprites.allOfKind(SpriteKind.city)) {
        値.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.city, function (sprite, otherSprite) {
    clearEnemy()
    clearMap()
    tiles.setTilemap(tilemap`レベル1`)
    spritesetting()
    controller.moveSprite(mySprite, 0, 0)
    mySprite.setPosition(16, 152)
    pause(1000)
    controller.moveSprite(mySprite, 50, 50)
})
function clearEnemy () {
    for (let 値 of sprites.allOfKind(SpriteKind.Enemy)) {
        値.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kyokai, function (sprite, otherSprite) {
    if (controller.up.isPressed()) {
        if (game.ask("冒険を記録しますか")) {
            saveSetting()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(inSentou)) {
        clearEnemy()
        sentou()
        putEnemy()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("HP " + convertToText(hp) + " / " + convertToText(maxhp) + "\\nMP " + convertToText(mp) + " / " + convertToText(maxmp) + "\\nLEVEL " + convertToText(level), DialogLayout.Bottom)
})
let city1: Sprite = null
let doguya: Sprite = null
let murabito: Sprite = null
let king1: Sprite = null
let kyokai1: Sprite = null
let bed: Sprite = null
let entrance: Sprite = null
let enemy1: Sprite = null
let inSentou = false
let mySprite: Sprite = null
let mp = 0
let maxmp = 0
let hp = 0
let maxhp = 0
let level = 0
scene.setBackgroundColor(15)
level = 1
maxhp = 10
hp = 10
maxmp = 0
mp = 0
if (blockSettings.exists("level")) {
    if (game.ask("前回の続きから始めますか")) {
        getSetting()
    }
}
pause(500)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`レベル1`)
spritesetting()
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(56, 200)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
