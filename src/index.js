import core from './core.js'
import Path from './path'
import Point from './point'
import Line  from './line'
import Paper from './paper/index'
import namespace from './namespace'
import browser from './browser'
import transition from './animation'
import color from './color'
import interpolate from './interpolate'
import utils from './utils'
import math from './math'

import './cad-shape'
import './def.js'
import './color/index'
import './sample'
import  {defineBlock,defineSymbol} from './block/index'
core.extend({defineBlock,defineSymbol});
core.extend({
	transition:transition,
    Point:Point,
    Line:Line,
    Path:Path,
    Paper:Paper,
    namespace:namespace,
    browser:browser,
    utils:utils,
    init:function(el,option){
        return new this.Paper(el,option);
    }
});
core.extend(math);
core.extend(color);
core.extend(interpolate);
module.exports = core;
window.cad = core;