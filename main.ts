namespace SpriteKind {
    export const kagu = SpriteKind.create()
    export const king = SpriteKind.create()
    export const shop = SpriteKind.create()
    export const kyokai = SpriteKind.create()
    export const entrance = SpriteKind.create()
    export const murabito = SpriteKind.create()
    export const city = SpriteKind.create()
    export const EnemyPic = SpriteKind.create()
    export const bed = SpriteKind.create()
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
    maxhp = blockSettings.readNumber("maxhp")
    hp = blockSettings.readNumber("hp")
    maxmp = blockSettings.readNumber("maxmp")
    mp = blockSettings.readNumber("mp")
    exp = blockSettings.readNumber("exp")
    gold = blockSettings.readNumber("gold")
}
function putEnemy () {
    for (let index = 0; index < 3; index++) {
        mapEnemy1 = sprites.create(img`
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
        tiles.placeOnRandomTile(mapEnemy1, sprites.castle.tileGrass1)
        mapEnemy1.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(mapEnemy1)) {
            mapEnemy1.destroy()
        }
    }
    for (let index = 0; index < 3; index++) {
        mapEnemy2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mapEnemy2, sprites.castle.tileGrass3)
        mapEnemy2.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(mapEnemy2)) {
            mapEnemy2.destroy()
        }
    }
    for (let index = 0; index < 5; index++) {
        mapEnemy3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mapEnemy3, sprites.builtin.forestTiles0)
        mapEnemy3.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(mapEnemy3)) {
            mapEnemy3.destroy()
        }
    }
    for (let index = 0; index < 5; index++) {
        mapEnemy4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mapEnemy4, sprites.castle.tilePath5)
        mapEnemy4.setFlag(SpriteFlag.Invisible, false)
        if (mySprite.overlapsWith(mapEnemy4)) {
            mapEnemy4.destroy()
        }
    }
}
function setEnemy1 (myImage: Image) {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`レベル9`)
    if (myImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        if (Math.percentChance(50)) {
            game.showLongText("どくろが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.EnemyPic)
            enemyLevel = 5
        } else {
            game.showLongText("パリピが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                ....................................................fffffffff......................
                ...................................................ff1111111ff.....................
                ..................................................ff111111111f.....................
                .................................................ff1111111111ff....................
                ................................................ff111111bbb11ff....................
                ................................................f1111111bbdb11f....................
                ................................................f1111111bbdd11ff...................
                ................................................fc1111ccccdd111f...................
                ................................................fccccccddddd111ff..................
                ...............................................f11cccdddddcc1111f..................
                ...............................................ff11cdddddcc11111ff.................
                ................................................ffffffffff1111111f.................
                .........................................................ff111111ff................
                ..........................................................f1111111f................
                .........................................fffffffff........ff111111f................
                .......................................fff1111111fff.......f111111ff...............
                ......................................ff11111111111ff......fb111111f...............
                .....................................ff1111111111111ff.....fb111111f...............
                .....................................f11111111cc11111f.....fb11111df...............
                ....................................ff1cc11111cc11111ff....fbd111ddf...............
                ....................................f11cc11111cc111111f....fdddddddf...............
                ....................................f11cc11111bb111111f...fbbddddddf...............
                ....................................f11bb1111111111111f..ff1bbdddddf...............
                ....................................f1111111111b111111f.ff111bbdddff...............
                ....fffffff.........................f111b11111bb111111fff11111bbdff................
                ...ff11111ff........................f1111cccccc1111111ff1111111bff.................
                ..ff1111111ff.......................f11111ccc33111111cc111111111ff.................
                .ff111bbb111ff......................f111111c333111111cb1111111111f.................
                ff11111bbb111ff.....................f111111c33311111cc1b11111111ff.................
                f1111cccbb1111f.....................ff11111133111111c11b1111111ff..................
                f111cc11111111f......................f1111111111111cc111b11111ff...................
                f111c111111111f......................ff111111111111c1111b1111ff....................
                f111ccccc11111f.......................ff1111111111cc11111b11ff.....................
                ff111bbdc11111ff.......................fcc1111111cc1111111bff......................
                .fffbbdddb11111f.......................fccccccccc1b11111111ff......................
                ...ffdddddbb111ff.....................ffb1111b1111b11111111ff......................
                ....ffdddd111111f....................ffb11111b111b111111111ff......................
                .....fffff111111ff..................ffbb111111bbb1111111111ffffffff................
                .........f1111111f.................ffdb11111111111111111111ffffffffff..............
                .........ff111111ff......fffffffffffddb1111111111111111111cc1111111fff.............
                ..........ff111111f....fff1111111cccddb11111111111161111cc11111111111ff............
                ..........ff111111ff..ff11111111111ccdd1111111111166111cc1111111111111ff...........
                ...........f1111111f.ff1111111111111ccd1111161611166111c111111111111111ff..........
                ...........ffd11111fff111111111111111cc111166666111611cc111111111111111ff..........
                ............fdd111b1ff111111111111111cc111116161111611c11111111133133111f..........
                ............ffddddb1f11111111111111111c111166666111611c11111111133333111ff.........
                .............fdddb11f1cc11111111111111cc11116161116661c13313311133333111ff.........
                .............ffdbb11f1cc11111111111111cc11111111111111c13333311113331111ff.........
                ..............fccb11f1cc11111111111111ff11111111111111c13333311111311111ff.........
                ..............fcc111f1bb11111cc1111111ff11111111111661c11333111111111111ff.........
                ..............fcc111f11111111cc1111111fff1166616611616c1113111111b111111ff.........
                ..............fc1111f11b11111cc1111111fff1161116161616c11111b1111b111111ff.........
                ..............f11111f11b111b1bb1111111fff1166616661616c111111cccc1111111ff.........
                ..............f11111f111cccb1111111111f.ff161116161616cc111111111111111cf..........
                ...............f11111c11b331111111111ff.ff1611161611111c111111111111111cffff.......
                ...............ff1111c113331111111111f..ff1111111111111cc1111111111111ccddfff......
                ................ff1111c1333111111111ff...f11111111111111cc11111111111ccddbddff.....
                .................ff1111c11111111111ff....f11111111111111cccc1111111cccddbbdddff....
                ..................ff11b1cc1111111cccf....f111111111111bcc11ccccccccc1111b11dddff...
                ...................ff1b11bcccccccbdcff...f1111111111bbcc1111111111111111b1111dff...
                ....................ff111bb11111bbddfff..f111111bbbbbcc111111111ccc1111cc111111ff..
                ....................ff1111bb111bbddddfff.fbbbbbbbbbbbcd111111111c1cc11cc1c11111ff..
                .....................f11111bbbbbddddddffffbbbbbbbbbbccd111cc111c111cc1c11c111111ff.
                .....................f111111ddddddddddbfffbbbbbbbbbbcdd11c1cc11c1111ccc11c111111ff.
                .....................f1111111ddddddddbbdfffbbbbbbbbccdd11c11c1c111111cc11c111111bff
                .....................f11161611dd6dddbbdddffcbbbbbbbccdd11c11ccc1111111111c11111bbff
                .....................f11666661166dddbdddddccbbbbbbbcddd11c11ccc1111111111c1111bbddf
                .....................f111616111661ddbddddddccbbbbbbcddd11c1111cc111111111ccc1bbdddf
                .....................ff1666661116111bdddddd1cbbbbbbccbbd1c11111cc1111111111ccccdddd
                .....................ff1161611116111b1dddd11ccbbbbbcddbbcc111111cc111111111111ccccd
                ......................f1111111116111b11111111cbbbbbcdddcc11111111ccc1111111111111cc
                ......................f1111111166611b11111111ccbbbbcddcc111111111ccccc1111111111111
                ......................f1166611111111bb11111111cbbbccdcc11111111ccc111ccc11111111111
                ......................f11611166111111b11111111cbbbcccc111111cccc1111111ccc111111111
                ......................ff1666161616611b1111111ccbbbccc1111111c111111111111ccc1111111
                ......................ff1611166616161b111111bcccbbcc1111111cc11111111111111ccc11111
                .......................f16111616161611b111bbb1ccbbc11111111c11111111111111111fcc111
                .......................f11111616161611bbbbb111cccbc1111111cc11111111111111111ffccff
                .......................f1111111111111111b111111cccc111111cc1111111111111111111f....
                .......................f1111111111111111b111111cccc11111cc11111111111111111111f....
                `, SpriteKind.EnemyPic)
            enemyLevel = 8
        }
    } else if (myImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        if (Math.percentChance(50)) {
            game.showLongText("モンスタが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddbb55555bccc...
                ...ccdddddddcc555bcc....
                .ccccdddddddddcccbcccc..
                .cdcdddddddd55dbbbc55c..
                .cdddddddddd555dccc5c...
                .cbddddbbbbdd5d555cc....
                ..cbdddbbbbbdd5555......
                ...cccbbbbbbd5555c......
                .....cccccccc555c.......
                .............ccc........
                `, SpriteKind.EnemyPic)
            enemyLevel = 4
        } else if (myImage.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
        	
        } else {
            game.showLongText("メが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....fffffccccccff.........ccc..
                ...ffbbbbbbbcbbbbcfff....ccbbc..
                ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                ffbbbbbbffbbcbcbbbcccccfcdbbf...
                fbcbbb11ff1bcbbbbbcccccffbbf....
                fbbb11111111bbbbbcccccccbbcf....
                .fb11133cc11bbbbcccccccccccf....
                ..fccc31c111bbbcccccbdbffbbcf...
                ...fc13c111cbbbfcddddcc..fbbf...
                ....fccc111fbdbbccdcc.....fbbf..
                ........ccccfcdbbcc........fff..
                .............fffff..............
                `, SpriteKind.EnemyPic)
            enemyLevel = 6
        }
    } else {
        if (Math.percentChance(50)) {
            game.showLongText("イエローモンスタが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddbb55555bccc...
                ...ccdddddddcc555bcc....
                .ccccdddddddddcccbcccc..
                .cdcdddddddd55dbbbc55c..
                .cdddddddddd555dccc5c...
                .cbddddbbbbdd5d555cc....
                ..cbdddbbbbbdd5555......
                ...cccbbbbbbd5555c......
                .....cccccccc555c.......
                .............ccc........
                `, SpriteKind.EnemyPic)
            enemyLevel = 4
        } else {
            game.showLongText("サメが出現", DialogLayout.Bottom)
            EnemyPic = sprites.create(img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....fffffccccccff.........ccc..
                ...ffbbbbbbbcbbbbcfff....ccbbc..
                ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                ffbbbbbbffbbcbcbbbcccccfcdbbf...
                fbcbbb11ff1bcbbbbbcccccffbbf....
                fbbb11111111bbbbbcccccccbbcf....
                .fb11133cc11bbbbcccccccccccf....
                ..fccc31c111bbbcccccbdbffbbcf...
                ...fc13c111cbbbfcddddcc..fbbf...
                ....fccc111fbdbbccdcc.....fbbf..
                ........ccccfcdbbcc........fff..
                .............fffff..............
                `, SpriteKind.EnemyPic)
            enemyLevel = 6
        }
    }
    enemyHP = enemyLevel
    EnemyPic.setPosition(36, 37)
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
        `, SpriteKind.bed)
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
function kougekiPlayer () {
    game.showLongText("自分の攻撃", DialogLayout.Bottom)
    damage = Math.ceil(exp * (randint(2, 6) / 100))
    enemyHP += 0 - damage
    uploadStatus()
    game.showLongText("" + convertToText(damage) + "のダメージを与えた", DialogLayout.Bottom)
    if (0 >= enemyHP) {
        enemyHP = 0
        inTatakai = false
        EnemyPic.destroy()
        game.showLongText("敵を倒した", DialogLayout.Bottom)
        exp += enemyLevel
        uploadStatus()
        game.showLongText("" + convertToText(enemyLevel) + "の経験値を獲得", DialogLayout.Bottom)
        gold += enemyLevel
        uploadStatus()
        game.showLongText("" + convertToText(enemyLevel) + "ゴールドを獲得", DialogLayout.Bottom)
        maxhp = Math.ceil(exp / 10)
        if (999 <= maxhp) {
            maxhp = 999
        }
        uploadStatus()
        game.showLongText("最大HPが" + convertToText(maxhp) + "になった", DialogLayout.Bottom)
        maxmp = Math.ceil(exp / 20)
        if (999 <= maxmp) {
            maxmp = 999
        }
        uploadStatus()
        game.showLongText("最大MPが" + convertToText(maxmp) + "になった", DialogLayout.Bottom)
    }
}
function clearSentou () {
    for (let mapEnemy2 of sprites.allOfKind(SpriteKind.Text)) {
        mapEnemy2.destroy()
    }
    for (let mapEnemy2 of sprites.allOfKind(SpriteKind.EnemyPic)) {
        mapEnemy2.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.entrance, function (sprite, otherSprite) {
    clearCity()
    mapSetting()
    tiles.setTilemap(tilemap`レベル2`)
    putEnemy()
    mySprite.setPosition(72, 184)
    controller.moveSprite(mySprite, 50, 50)
})
function uploadStatus () {
    testSpriteHP.setText("HP " + convertToText(hp) + "/" + convertToText(maxhp))
    textSpriteMP.setText("MP " + convertToText(mp) + "/" + convertToText(maxmp))
    textSpriteLVL.setText("EXP " + convertToText(exp))
    textGold.setText("GOLD " + convertToText(gold))
}
function sentou () {
    game.setDialogCursor(img`
        . . . 6 6 6 6 6 6 . . . 
        . . 6 6 8 8 8 6 6 6 . . 
        . 6 6 6 8 8 8 8 6 6 6 . 
        . 6 6 8 8 6 8 8 8 6 6 . 
        6 6 6 8 8 6 6 8 8 6 6 6 
        6 6 6 8 8 6 6 8 8 6 6 6 
        6 6 6 8 8 8 8 8 8 6 6 6 
        6 6 8 8 6 6 6 6 8 8 6 6 
        . 6 8 8 6 6 6 6 8 8 6 . 
        . 6 8 8 6 6 6 6 8 8 6 . 
        . . 6 6 6 6 6 6 6 6 . . 
        . . . . 6 6 6 6 . . . . 
        `)
    displayCommand()
    inTatakai = true
    while (inTatakai) {
        uploadStatus()
        story.showPlayerChoices("戦う", "魔法", "道具", "逃げる")
        if (story.checkLastAnswer("戦う")) {
            kougekiPlayer()
            if (!(inTatakai)) {
                break;
            }
        } else if (story.checkLastAnswer("魔法")) {
        	
        } else if (story.checkLastAnswer("道具")) {
            game.showLongText("道具がない", DialogLayout.Bottom)
        } else if (story.checkLastAnswer("逃げる")) {
            nigeru()
            if (!(inTatakai)) {
                break;
            }
        }
        kougekiEnemy()
    }
    inTatakai = false
    clearSentou()
    mapSetting()
    mySprite.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(mySprite, 50, 50)
    scene.cameraFollowSprite(mySprite)
}
function nigeru () {
    if (Math.percentChance(40)) {
        inTatakai = false
        game.showLongText("逃げ出した", DialogLayout.Bottom)
    } else {
        game.showLongText("逃げられなかった", DialogLayout.Bottom)
    }
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
    for (let mapEnemy2 of sprites.allOfKind(SpriteKind.murabito)) {
        mapEnemy2.destroy()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.bed, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    bed.setKind(SpriteKind.kagu)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    bed.setImage(img`
        ...bbccccccbb...
        ..bdddffffd1db..
        .bddfff22fffddb.
        .cdfff2222fffdc.
        .cfffeeeeeefffc.
        .fffe222222eeff.
        .ffe2ffffff2eff.
        f6ffffeeeeffff6f
        fffefbd44dbfefff
        ffee4ffbbff4eeff
        fbfeeddddddeefbf
        fbbfee4444eefbbf
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
        `)
    hp = maxhp
    mp = maxmp
    music.playMelody("C5 G B A F A C5 B ", 120)
    bed.setImage(img`
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
        `)
    mySprite.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(mySprite, 50, 50)
})
function mapSetting () {
    scene.setBackgroundColor(7)
    tiles.setTilemap(tilemap`レベル2`)
    city1 = sprites.create(, SpriteKind.city)
    city1.setPosition(72, 168)
    city2 = sprites.create(assets.tile`myTile2`, SpriteKind.city)
    city2.setPosition(40, 88)
    city3 = sprites.create(img`
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
    city3.setPosition(232, 8)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("強さ", "魔法", "道具", "戻る")
    if (story.checkLastAnswer("強さ")) {
        game.showLongText("HP " + convertToText(hp) + " / " + convertToText(maxhp) + "\\nMP " + convertToText(mp) + " / " + convertToText(maxmp) + "\\nEXP " + convertToText(exp) + "\\nGOLD " + convertToText(gold), DialogLayout.Bottom)
    } else if (story.checkLastAnswer("魔法")) {
    	
    } else if (story.checkLastAnswer("道具")) {
    	
    } else {
    	
    }
})
function setEnemy (mySprite: Sprite) {
	
}
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
function kougekiEnemy () {
    game.showLongText("敵の攻撃", DialogLayout.Bottom)
    damage = Math.ceil(enemyLevel * (randint(10, 45) / 100))
    hp += 0 - damage
    if (0 >= hp) {
        hp = 0
        inTatakai = false
    }
    uploadStatus()
    game.showLongText("" + convertToText(damage) + "のダメージを受けた", DialogLayout.Bottom)
    if (0 >= hp) {
        game.showLongText("敵に倒されてしまった", DialogLayout.Bottom)
    }
}
function saveSetting () {
    blockSettings.writeNumber("maxhp", maxhp)
    blockSettings.writeNumber("hp", hp)
    blockSettings.writeNumber("maxmp", maxmp)
    blockSettings.writeNumber("mp", mp)
    blockSettings.writeNumber("exp", exp)
    blockSettings.writeNumber("gold", gold)
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
    for (let mapEnemy2 of sprites.allOfKind(SpriteKind.city)) {
        mapEnemy2.destroy()
    }
}
function displayCommand () {
    tiles.setTilemap(tilemap`レベル3`)
    testSpriteHP = textsprite.create("")
    testSpriteHP.setPosition(80, 20)
    textSpriteMP = textsprite.create("")
    textSpriteMP.setPosition(80, 32)
    textSpriteLVL = textsprite.create("")
    textSpriteLVL.setPosition(80, 44)
    textGold = textsprite.create("")
    textGold.setPosition(80, 56)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.city, function (sprite, otherSprite) {
    clearEnemy()
    clearMap()
    if (otherSprite.image.equals()) {
    	
    } else if (otherSprite.image.equals(img`
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
        . . . . . . . . . . . . . . . . 
        `)) {
    	
    } else if (otherSprite.image.equals(img`
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
        . . . . . . . . . . . . . . . . 
        `)) {
    	
    }
    tiles.setTilemap(tilemap`レベル1`)
    spritesetting()
    controller.moveSprite(mySprite, 0, 0)
    mySprite.setPosition(16, 152)
    pause(1000)
    controller.moveSprite(mySprite, 50, 50)
})
function clearEnemy () {
    for (let mapEnemy2 of sprites.allOfKind(SpriteKind.Enemy)) {
        mapEnemy2.destroy()
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
        inSentou = true
        mySprite.setFlag(SpriteFlag.Invisible, true)
        controller.moveSprite(mySprite, 0, 0)
        scene.centerCameraAt(0, 0)
        clearMap()
        clearEnemy()
        setEnemy1(otherSprite.image)
        sentou()
        putEnemy()
        inSentou = false
    }
})
let inSentou = false
let city3: Sprite = null
let city2: Sprite = null
let city1: Sprite = null
let textGold: TextSprite = null
let textSpriteLVL: TextSprite = null
let textSpriteMP: TextSprite = null
let testSpriteHP: TextSprite = null
let inTatakai = false
let damage = 0
let doguya: Sprite = null
let murabito: Sprite = null
let king1: Sprite = null
let kyokai1: Sprite = null
let bed: Sprite = null
let entrance: Sprite = null
let enemyHP = 0
let enemyLevel = 0
let EnemyPic: Sprite = null
let mapEnemy4: Sprite = null
let mapEnemy3: Sprite = null
let mapEnemy2: Sprite = null
let mapEnemy1: Sprite = null
let mySprite: Sprite = null
let gold = 0
let exp = 0
let mp = 0
let maxmp = 0
let hp = 0
let maxhp = 0
scene.setBackgroundColor(15)
maxhp = 10
hp = 10
maxmp = 0
mp = 0
exp = 100
gold = 0
let textSprite = textsprite.create("Dragon Question")
textSprite.setPosition(80, 58)
pause(1000)
textSprite.destroy()
if (blockSettings.exists("exp")) {
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
