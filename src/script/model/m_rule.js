'use strict'

export class M_RuleManager {
    constructor(mCrashMgr, mFieldMgr) {
        this.mCrashMgr = mCrashMgr
        this.mFieldMgr = mFieldMgr
    }

    update() {
        this.mCrashMgr.update();
        this.mFieldMgr.update();
    }
}