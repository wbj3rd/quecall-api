"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let FormRepository = class FormRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, solutionRepositoryGetter) {
        super(models_1.Form, dataSource);
        this.solutionRepositoryGetter = solutionRepositoryGetter;
        this.solution = this.createHasOneRepositoryFactoryFor('solution', solutionRepositoryGetter);
        this.registerInclusionResolver('solution', this.solution.inclusionResolver);
    }
};
FormRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__param(1, repository_1.repository.getter('SolutionRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function])
], FormRepository);
exports.FormRepository = FormRepository;
//# sourceMappingURL=form.repository.js.map