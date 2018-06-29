"use strict";

//=============================================================================
// EISItemSounds.js
//=============================================================================

/*:
* @author Kino
* @plugindesc Allows you to add sounds to items that you equip or use. <EISItmSnds>
*
*
* @help
//=============================================================================
//  Notetag
//=============================================================================
*
* <se: name volume pitch>
* Example: <se: Applause2 100 100>
*
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

(function () {
  var params = $plugins.filter(function (plugin) {
    return (/<EISItmSnds>/ig.test(plugin.description)
    );
  })[0].parameters;

  function setup() {
    var ITEMEMITTER = new Mercedes.Emitter();
    ITEMEMITTER.on("ItemSounds", function (se) {
      AudioManager.playSe(se);
    });
    //=============================================================================
    //  Scene_Item
    //=============================================================================
    var _SceneItem_playSeForItem = Scene_Item.prototype.playSeForItem;
    Scene_Item.prototype.playSeForItem = function () {
      var data = /\s*<se:\s*(.*)\s+(\d+)\s+(\d+)\s*>\s*/ig.exec(this.item().note);
      if (data === null) {
        _SceneItem_playSeForItem.call(this);
      } else {
        ITEMEMITTER.emit("ItemSounds", { name: data[1].trim(), volume: parseInt(data[2]), pitch: parseInt(data[3]) });
      }
    };
    //=============================================================================
    //  SoundManager
    //=============================================================================
    var _SoundManager_playEquip = SoundManager.playEquip;
    SoundManager.playEquip = function () {
      var data = null;
      var scene = SceneManager._scene;
      if (scene instanceof Scene_Equip) {
        data = /\s*<se:\s*(.*)\s+(\d+)\s+(\d+)\s*>\s*/ig.exec(scene._itemWindow.item().note);
        if (data) {
          ITEMEMITTER.emit("ItemSounds", { name: data[1].trim(), volume: parseInt(data[2]), pitch: parseInt(data[3]) });
        } else {
          _SoundManager_playEquip.call(this);
        }
      } else {
        _SoundManager_playEquip.call(this);
      }
    };
  }
  if (Mercedes.imported) setup();
})();