const Cube = require("./../models/Cube");

exports.create = async (cubeData) => {
    // const cube = new Cube(cubeData);
    // await cube.save();

    return await Cube.create(cubeData);
};

exports.getAll = async (search, from, to) => {
    let filterCubes = await Cube.find().lean();

    // TODO: this will be filtered later with mongoose
    if (search) {
        filterCubes = filterCubes.filter((cube) =>
            cube.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (from) {
        filterCubes = filterCubes.filter(
            (cube) => cube.difficultyLevel >= Number(from)
        );
    }

    if (to) {
        filterCubes = filterCubes.filter(
            (cube) => cube.difficultyLevel <= Number(to)
        );
    }

    return filterCubes;
};

exports.getSingleCube = (id) => Cube.findById(id).populate("accessories");

exports.attachAccessory = async (cubeId, accessoryId) => {
    // return Cube.findByIdAndUpdate(cubeId, {
    //   $push: { accessories: accessoryId },
    // });
    const cube = await this.getSingleCube(cubeId);
    cube.accessories.push(accessoryId);
    return cube.save();
};
