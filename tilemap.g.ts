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
            case "レベル4":
            case "レベル4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "レベル5":
            case "レベル5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "レベル6":
            case "レベル6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "レベル2":return tiles.createTilemap(hex`10001000121717171717171717101418181915101717171717170e0f0f0d14181819191317171717170e0d1616161608080808080a091717081616160808161616160c0c04080808081608081616080808160c0c0408151616161608081616161616160c040b1516160c0c08080808080808060c030401010101010102161616161616160c0c0c0c0c0c0c0304010101010101050c0c0c0c0606060606060606060606060c0c0c061506060606070808080606060c0c060615060606070707080808080c0c0c06060606060707070707070808080c0c0c06060607070707070707070e0f0f0c0c0c0c07070707070707070707100d0f0f0f0f0f0f0f0f0f0f0f0f110710`, img`
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
`, [myTiles.transparency16,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile12,sprites.swamp.swampTile9,sprites.dungeon.stairNorth,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.rock0,sprites.swamp.swampTile5,sprites.swamp.swampTile6,myTiles.tile3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.skillmap.islandTile4,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles24], TileScale.Sixteen);
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
