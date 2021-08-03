// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000606000000000001010101010101000006060606060600010303030303010000000000000000000103030303030100010101010101000001030303030301000104040303010000010303030303010001030303030100000103030303030100010105050101000001010303030101000000020200000000000002020200000002020202020202020202020202000000000002000000000200000000000000000001030101010002000101070101000000010303030100020001030303010000000103030301000200010103010100000001010101010002000000020000000000000000000000020202020200000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 . 
. . . . . . . . 2 . . . . . 2 . 
. . . . . . . . 2 . . . . . 2 . 
2 2 2 2 2 2 . . 2 . . . . . 2 . 
2 . . . . 2 . . 2 . . . . . 2 . 
2 . . . . 2 . . 2 . . . . . 2 . 
2 2 2 2 2 2 . . 2 2 . . . 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . 2 2 2 . . . 2 2 2 2 2 . . 
. 2 . . . 2 . . . 2 . . . 2 . . 
. 2 . . . 2 . . . 2 2 . 2 2 . . 
. 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.swamp.swampTile16,sprites.swamp.swampTile9,sprites.dungeon.chestOpen,sprites.dungeon.stairLadder,sprites.swamp.swampTile3,myTiles.tile1], TileScale.Sixteen);
            case "レベル3":
            case "レベル3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "レベル2":
            case "レベル2":return tiles.createTilemap(hex`10001000170606060606060606151906060606150606060606061011110f1906060606180606060606100f0606060609090909090b0a07070907070709090606060707070409090909070909060609090906060604090707070707090906060606060606040c0607070707090909090909090606030401010101010102070707070707070d0d0d0d0d0d060304010101010101050d0d0d0d0606060606060606060606060d0d0606060606060606090909060606060606060606060606061309090909060606060606060606061308080809090912120606060606060614080808081011110e120e0e06060e0e0e0808080808150f111111111111111111111111160815`, img`
2 . . . . . . . . 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . 2 2 . . . . 2 2 2 2 2 
2 2 . . 2 . . . 2 2 . . . . . . 
2 2 2 2 2 . 2 2 . . 2 2 2 . . . 
2 2 . . . . . 2 2 . . . . . . . 
2 2 . . . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile12,sprites.swamp.swampTile9,sprites.dungeon.stairNorth,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.rock0,sprites.swamp.swampTile5,sprites.swamp.swampTile6,myTiles.tile3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles4,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.builtin.forestTiles9,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
