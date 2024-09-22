//
//  Counter.m
//  testBridgeRN
//
//  Created by thane tnt on 21/09/2024.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter,NSObject)

//RCT_EXTERN_METHOD(increment:(RCTPromiseResolveBlock)resolve
//                  reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(increment:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(decrement:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
