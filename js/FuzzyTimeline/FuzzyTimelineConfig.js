/*
* FuzzyTimelineConfig.js
*
* Copyright (c) 2013, Sebastian Kruse. All rights reserved.
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU Lesser General Public
* License as published by the Free Software Foundation; either
* version 3 of the License, or (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* Lesser General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public
* License along with this library; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
* MA 02110-1301  USA
*/

/**
 * @class FuzzyTimelineConfig
 * FuzzyTimeline Configuration File
 * @author Sebastian Kruse (skruse@mpiwg-berlin.mpg.de)
 */
function FuzzyTimelineConfig(options) {

	this.options = {
			proxy : 'php/proxy.php?address=',
			//TODO: experiment with number of ticks, 150 seems to be ok for now
			maxBars : 50,
			maxDensityTicks : 150
	};
	if ( typeof options != 'undefined') {
		$.extend(this.options, options);
	}

};