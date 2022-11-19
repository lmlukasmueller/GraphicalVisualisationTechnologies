var pillow = ( function() {

	function createVertexData() {
		var n = 50;
		var m = 50;

		// Positions.
		this.vertices = new Float32Array(3 * (n + 1) * (m + 1));
		var vertices = this.vertices;
		// Normals.
		this.normals = new Float32Array(3 * (n + 1) * (m + 1));
		var normals = this.normals;
		// Index data.
		this.indicesLines = new Uint16Array(2 * 2 * n * m);
		var indicesLines = this.indicesLines;
		this.indicesTris = new Uint16Array(3 * 2 * n * m);
		var indicesTris = this.indicesTris;

		var du = 2 * Math.PI / n;
		var dv = 2 * Math.PI / m;
		var r = 0.6;
		var offsetX = 1;
		var offsetY = 1;
		var offsetZ = -1;

		// Counter for entries in index array.
		var iLines = 0;
		var iTris = 0;

		// Loop angle u.
		for(var i = 0, u = 0; i <= n; i++, u += du) {
			// Loop angle v.
			for(var j = 0, v = -Math.PI; j <= m; j++, v += dv) {

				var iVertex = i * (m + 1) + j;

				var x = Math.cos(u);
				var y = Math.sin(v);
				var z = r * Math.sin(u) * Math.cos(v);

				// Set vertex positions.
				vertices[iVertex * 3] = x + offsetX;
				vertices[iVertex * 3 + 1] = y + offsetY;
				vertices[iVertex * 3 + 2] = z + offsetZ;

				// Calc and set normals.
				var nx = Math.cos(u) * Math.cos(v);
				var ny = Math.cos(u) * Math.sin(v);
				var nz = Math.sin(u);
				normals[iVertex * 3] = nx;
				normals[iVertex * 3 + 1] = ny;
				normals[iVertex * 3 + 2] = nz;

				// if(i>14){
				// continue;
				// }

				// Set index.
				// Line on beam.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - 1;
					indicesLines[iLines++] = iVertex;
				}
				// Line on ring.
				if(j > 0 && i > 0) {
					indicesLines[iLines++] = iVertex - (m + 1);
					indicesLines[iLines++] = iVertex;
				}

				// Set index.
				// Two Triangles.
				if(j > 0 && i > 0) {
					indicesTris[iTris++] = iVertex;
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
					//
					indicesTris[iTris++] = iVertex - 1;
					indicesTris[iTris++] = iVertex - (m + 1) - 1;
					indicesTris[iTris++] = iVertex - (m + 1);
				}
			}
		}
	}

	return {
		createVertexData : createVertexData
	}

}());
