﻿// --------------------------------------------------------------------------------------
// Fur 是 .NET 5 平台下极易入门、极速开发的 Web 应用框架。
// Copyright © 2020 Fur, Baiqian Co.,Ltd.
//
// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 源码地址：https://gitee.com/monksoul/Fur
// 开源协议：Apache-2.0（http://www.apache.org/licenses/LICENSE-2.0）
// --------------------------------------------------------------------------------------

using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Fur.DataValidation
{
    /// <summary>
    /// 数据类型验证特性
    /// </summary>
    public class DataValidationAttribute : ValidationAttribute
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="validationOptions">验证逻辑</param>
        /// <param name="validationTypes"></param>
        public DataValidationAttribute(ValidationOptions validationOptions, params object[] validationTypes)
        {
            ValidationOptions = validationOptions;
            ValidationTypes = validationTypes;
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="validationTypes"></param>
        public DataValidationAttribute(params object[] validationTypes)
        {
            ValidationOptions = ValidationOptions.AllOfThem;
            ValidationTypes = validationTypes;
        }

        /// <summary>
        /// 验证逻辑
        /// </summary>
        /// <param name="value"></param>
        /// <param name="validationContext"></param>
        /// <returns></returns>
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // 执行值验证
            var dataValidationResult = value.TryValidate(ValidationOptions, ValidationTypes);

            // 验证失败
            if (!dataValidationResult.IsValid)
            {
                return new ValidationResult(string.IsNullOrEmpty(ErrorMessage) ? dataValidationResult.ValidationResults.FirstOrDefault().ErrorMessage : ErrorMessage);
            }

            // 验证成功
            return ValidationResult.Success;
        }

        /// <summary>
        /// 验证类型
        /// </summary>
        public object[] ValidationTypes { get; set; }

        /// <summary>
        /// 验证逻辑
        /// </summary>
        public ValidationOptions ValidationOptions { get; set; }
    }
}