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
            case "レベル2":
            case "レベル2":return tiles.createTilemap(hex`10001000161b1b1b1b1b1b1b1b14181c1c1c19141b1b1b1b1b1b0f10100e181c1c1c19171b1b1b1b1b0f0e1a1a1a1a08080808080a091b1b081a1a1a08081a1a1a1a1a1a04080808081a08081a1a0808081a1a1a0408191a1a1a1a08081a1a1a1a1a1a1a040b191a1a1a1a0808080808080806060304010101010101021a1a1a1a1a1a1a0c0c0c0c0c0c060304010101010101050c0c0c0c0606060606060606060606060c0c0606190606060606080808060606060606061906060606061208080808060606060606060606061207070708080811110606060606060613070707070f10100d110d0d06060d0d0d0707070707140e101010101010101010101010150714`, img`
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
`, [myTiles.transparency16,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile12,sprites.swamp.swampTile9,sprites.dungeon.stairNorth,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.rock0,sprites.swamp.swampTile5,sprites.swamp.swampTile6,myTiles.tile3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles4,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.builtin.forestTiles9,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.skillmap.islandTile4,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
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
